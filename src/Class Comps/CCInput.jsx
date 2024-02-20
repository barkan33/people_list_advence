import React, { Component } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import BasicAlerts from '../Func Comps/BasicAlert';

export default class CCInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      grade: 0,
      showAlert: false
    };
  }

  SendStudent = () => {
    if (this.state.name == null|| this.state.name.trim()=="") {
      this.setState({ showAlert: true });
      return;
    } else {
      this.setState({ showAlert: false });
    }

    this.props.SendStudent(this.state.name, this.state.grade)
  }

  render() {
    return (
      <div>
        {this.state.showAlert && <BasicAlerts />}
        <div className='CCInput' style={{ border: "SOLID 1px #cccccc", borderRadius: "8px", width: "200px" }}>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              label="NAME"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <TextField
              margin="normal"
              label="GRADE"
              type='number'
              onChange={(event) => this.setState({ grade: event.target.value })}
            />

            <Button
              type="button"
              style={{ display: "block", marginInline: "auto" }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={this.SendStudent}
            >
              Add Student
            </Button>
          </Box>
        </div>

      </div>
    )
  }
}
