import React, {Component} from 'react' 

class TaxonTree extends Component{
  render(){
    return(
      <div>
        <h1>Taxonomic Tree</h1>
        <a href='http://openherbarium.org/portal/taxa/admin/taxonomydisplay.php' target='_blank' rel="noopener noreferrer">
            Link to Open Herbarium Taxon Tree
        </a>
      </div>
    )
  }
}

export default TaxonTree