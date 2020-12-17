import React from "react"
import { MDBCol} from "mdbreact"

//https://mdbootstrap.com/docs/react/forms/search/#docsTabsOverview

class Search extends React.Component {
  render() {
    return (
      <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Rechercher" aria-label="Search" />
        </form>
      </MDBCol>
    )
  }
}
export default Search;



