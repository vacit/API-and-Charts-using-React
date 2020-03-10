import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

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

    alert(
      'Fetching Data Columns: ' +
        `${this.state.selectedOption.map(option => ` ${option.label}`)}` +
        ' ..'
    );
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className='bg-primary px-4 py-2'>
        <form  onSubmit={this.handleSubmit}>
        <label className=' p-1 text-light'>choose the columns you want to show</label>

          <Select className=' p-1 '
            value={selectedOption}
            onChange={this.handleChange}
            options={this.props.tableTitles}
            // autoFocus={true}
            isMulti={true}
            // getOptionValue={true}
          />
          <input className=' btn btn-info p-1 my-2' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SelectMenu;
