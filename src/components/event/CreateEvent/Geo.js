import React from 'react'
import MUIPlacesAutocomplete from 'mui-places-autocomplete'

class Geo extends React.Component {
  constructor() {
    super()

    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  onSuggestionSelected(suggestion) {
    // Add your business logic here. In this case we just log...
    console.log('Selected suggestion:', suggestion)
  }

  render() {
    // Use 'renderTarget' prop to render a component/target we want the suggestions to popover

    return (
      <MUIPlacesAutocomplete
        onSuggestionSelected={this.onSuggestionSelected}
        renderTarget={() => (<div></div>)}
      />
    )
  }
}

export default Geo