import React, { Component } from 'react'
import {Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import FloraProjects from './components/FloraProjects/FloraProjects'
import HowToUse from './components/LearningMenu/HowToUse'
import Glossary from './components/LearningMenu/Glossary'
import Checklists from './components/LearningMenu/Checklists'
import IntroVideos from './components/LearningMenu/IntroVideos'
import LabExamples from './components/LearningMenu/LabExamples'
import DichotomousKeys from './components/IdResourcesMenu/DichotomousKeys'
import MultiAccessKeys from './components/IdResourcesMenu/MultiAccessKeys'
import SymbiotaKeys from './components/IdResourcesMenu/SymbiotaKeys'
import TaxonDescriptions from './components/IdResourcesMenu/TaxonDescriptions'
import TaxonTree from './components/NamesMenu/TaxonTree'
import Publications from './components/NamesMenu/Publications'
import NameChangeExp from './components/NamesMenu/NameChangeExp'
import WhyNamesChange from './components/NamesMenu/WhyNamesChange'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <Switch>
          <Route component={Landing} exact path='/'/>
          <Route component={HowToUse} exact path='/howtouse'/>
          <Route component={Glossary} exact path='/glossary'/>
          <Route component={Checklists} exact path='/checklists'/>
          <Route component={IntroVideos} exact path='/introvideos'/>
          <Route component={LabExamples} exact path='/labexamples'/>
          <Route component={FloraProjects} exact path='/floraprojects'/>
          <Route component={DichotomousKeys} exact path='/dichotomouskeys'/>
          <Route component={MultiAccessKeys} exact path='/multiaccesskeys'/>
          <Route component={SymbiotaKeys} exact path='/symbiotakeys'/>
          <Route component={TaxonDescriptions} exact path='/taxondescriptions'/>
          <Route component={TaxonTree} exact path='/taxontree'/>
          <Route component={Publications} exact path='/publications'/>
          <Route component={NameChangeExp} exact path='/namechangeexp'/>
          <Route component={WhyNamesChange} exact path='/whynameschange'/>
          <Route component={Login} exact path='/adminlogin'/>

        </Switch>
      </div>
    );
  }
}
export default withRouter(App)
