import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './App.scss';
import classNames from 'classnames';
import stringDataFilter from './helpers/data-filters.js';
import { connect } from 'react-redux';
import * as objectiveAction from './actions/objectiveAction';

class App extends Component {

  constructor(props) {
    super(props);

    this.formButtons = [];
    
    this.state = {
      brandNameValid: false,
      describeValid: false,
      objectivesValid: false,
      formDone: [],
      formStep: 1
    };
  }

  /*
    Validation provided by any textbox value and the validation ID, 
    if the value passes our validation rules then we change state for next step, 
    otherwise the validation is cancelled.
  */
  inputChange(e, validationId){
    if(stringDataFilter(e.target.value) !== null){
      if(validationId !== 'objectivesValid'){
        this.setState({
          [e.target.name]: e.target.value,
          [validationId]: true
        });
      }
    }
    else{
      this.setState({
        [validationId]: false
      });
    }
  }

  // catch any Enter button click on text-boxes
  handleKeyPress(target, ref){
    target.stopPropagation();
    
    if(target.charCode === 13){
      ReactDOM.findDOMNode(this.formButtons[ref].click());
    }
  }

  // Navigate with next button using steps id starting from zero
  nextButtonClick(value){
    value = parseInt(value);
    let formDone = this.state.formDone;
    formDone[value - 1] = true;
    this.setState({
      formStep: value,
      formDone: formDone
    });
  }

  /*
  Users are able to navigate through all tabs with this function, 
  but incomplete forms are still inactive (without done className).
  In this case, users can fill the desired tab without sorting. 
  Using the state we can still make the Finish Button is inactive.
  (Referenced with: this.state.formDone)
  */
  navigate(index){
    if(index === 0){
      if(this.state.formStep - 1 > 0){
        this.setState({
          formStep: this.state.formStep - 1
        });
      }

      return false;
    }

    this.setState({
      formStep: index
    });
  }

  // adding an item to objectives list (with redux state manager)
  // if at least one item existed in list then check the tab is done
  addObjective(){
    let object = ReactDOM.findDOMNode(this.objectiveRef);

    if(stringDataFilter(object.value) === null){
      return false;
    }

    // 3 is referencing to Objectives tab
    let formDone = this.state.formDone;
    formDone[3] = true;

    this.setState({
      objectivesValid: true,
      formDone: formDone
    }, () => {
      this.props.addObjective({
        title: object.value
      });

      // clear form
      object.value = '';
      object.focus();
    });
  }

  // removing clicked item from objectives list (with redux state manager)
  // if there's no item in list then check the tab is not completed
  removeObjective(index){
    this.props.removeObjective(index).then(() => {
      if(this.props.objectives.length === 0){
        let formDone = this.state.formDone;
        formDone[3] = false;
        this.setState({
            objectivesValid: false,
            formDone: formDone
        });
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="app">
          <nav>
            <ul className="nav">
            {this.props.navigation.map((element, index) => {
              return (
                <li key={ index } className={ [
                  'nav-item', element.className, 
                  (classNames({ 
                    active: this.state.formStep === (index), 
                    // there is no need to "done" class for back button! (Back button index is zero)
                    done: (index > 0 && this.state.formDone[index] === true), 
                  }))
                  ].join(' ') }
                  onClick={ () => this.navigate(index) }
                >
                  <button>
                    <i className={ ['fa', element.buttonIcon].join(' ') }></i>
                    <span>{ element.name }</span>
                  </button>
                </li>
              );
            })}
            </ul>
          </nav>
          <div className="main">
            <div className="container">
              <div className="row justify-content-xs-center justify-content-sm-center">
                <div className="col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0 
                col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4 text-center">
                  { (this.state.formStep === 1) && 
                    <div>
                      <h1>Brand Name</h1>
                      <h2>{ this.state.formStep } / { this.props.navigation.length }</h2>
                      <h3>What is the name of your brand?</h3>
                      <input 
                        type="text" 
                        name="brandName"
                        onChange={ (e) => this.inputChange(e, "brandNameValid") }
                        defaultValue={ this.state.brandName }
                        onKeyPress={ (e) => this.handleKeyPress(e, this.state.formStep) }
                        className="form-control form-control-lg form-input-box form-general col-md-auto" 
                        placeholder="Brand Name" autoFocus="autofocus" />
                      <button 
                        ref={ ref => { this.formButtons[this.state.formStep] = ref; }}
                        disabled={ ! this.state.brandNameValid } 
                        onClick={ () => this.nextButtonClick(this.state.formStep + 1) }
                        className="next-button">Next</button>
                    </div> 
                  }
                  { (this.state.formStep === 2) && 
                    <div>
                      <h1>Describe</h1>
                      <h2><i className="fa fa-angle-left"></i> { this.state.formStep } / { this.props.navigation.length }</h2>
                      <h3>Tell us about your brand</h3>
                      <textarea 
                        name="describe"
                        defaultValue={ this.state.describe }
                        onChange={ (e) => this.inputChange(e, "describeValid") }
                        onKeyPress={ (e) => this.handleKeyPress(e, this.state.formStep) }
                        className="form-control form-control-lg form-general col-md-auto" 
                        rows="5"
                        placeholder="Quickframe is a platform for short form original video at scale. 
                        Creators use us to get paid to produce videos 
                        while buyers use Quickframe to purchase videos." autoFocus="autofocus"></textarea>
                      <button 
                        ref={ ref => { this.formButtons[this.state.formStep] = ref; }}
                        disabled={ ! this.state.describeValid } 
                        onClick={ () => this.nextButtonClick(this.state.formStep + 1) }
                        className="next-button">Next</button>
                    </div> 
                  }
                  { (this.state.formStep === 3) && 
                    <div>
                      <h1>Objectives</h1>
                      <h2><i className="fa fa-angle-left"></i> { this.state.formStep } / { this.props.navigation.length }</h2>
                      <h3>What business objectives do you want to accomplish?</h3>
                      <div className="form-group group-objectives">
                        <input 
                          type="text" 
                          ref={ ref => { this.objectiveRef = ref; }}
                          name="objectives"
                          onChange={ (e) => this.inputChange(e, "objectivesValid") }
                          onKeyPress={ (e) => this.handleKeyPress(e, this.state.formStep) }
                          className="form-control form-control-lg form-input-box form-general textbox-rounded col-md-auto" 
                          placeholder="We want to go viral" autoFocus="autofocus" />
                        <button 
                          ref={ ref => { this.formButtons[this.state.formStep] = ref; }}
                          className="add-objective"
                          onClick={ () => this.addObjective() }
                        ><i className="fa fa-plus"></i></button>
                      </div>
                      <div className="objectives">
                      {this.props.objectives && this.props.objectives.map((element, index) => {
                        return (
                          <div className="item" key={ index }>
                          { element.title }
                          <span className="remove-objective" onClick={ () => this.removeObjective(index) }>
                            <i className="fa fa-times"></i>
                          </span>
                          </div>
                        );
                      })}
                      </div>
                      <button 
                        disabled={ ! this.state.objectivesValid } 
                        onClick={ () => this.nextButtonClick(this.state.formStep + 1) }
                        className="next-button">Finish Objectives</button>
                    </div> 
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    objectives: state.objectives
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addObjective: async (objective) => dispatch(objectiveAction.addObjective(objective)),
    removeObjective: async (index) => dispatch(objectiveAction.removeObjective(index)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);