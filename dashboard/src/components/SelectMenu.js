import React from 'react';
import Select from 'react-select';

class SelectMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null
    };
    // console.log('cons',this.state);
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption }
      // , () =>
      // console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log(`Option :`, this.state.selectedOption.value)
    let columns;
    if (this.state.selectedOption) {
      columns = `${this.state.selectedOption.map(option => option.label)}`;
      this.props.getDataByTitles(columns);
    }
    // console.log('columns',columns)
    else {
      alert('please choose Two titles to fetch. Try: HotelName & CommentCount');
    }

    // alert(
    //   'Fetching Data Columns: ' +
    //     `${this.state.selectedOption.map(option => ` ${option.label}`)}` +
    //     ' ..'
    // );
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className='bg-primary px-4 py-2'>
        <form onSubmit={this.handleSubmit}>
          <label className=' p-1 text-light'>
            Choose columns you want to compare. Note that <strong>only the first 2 columns</strong> will be rendered.
            <br/> try: <strong >HotelName</strong> & <strong>CommentCount</strong>
          </label>

          <Select
            className=' p-1 '
            value={selectedOption}
            onChange={this.handleChange}
            options={this.props.tableTitles}
            isMulti={true}
            backspaceRemovesValue={true}
            hideSelectedOptions={true}
            // autoFocus={true}
            // getOptionValue={true}
          />
          <input
            className=' btn btn-info p-1 my-2'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    );
  }
}

export default SelectMenu;
