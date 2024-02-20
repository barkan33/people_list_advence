import React, { Component } from 'react'
import CCInput from './CCInput'
import FCStudentList from '../Func Comps/FCStudentList'

export default class CCMain extends Component {

  constructor(props) {
    super(props)
    this.state = {
      student: []
    }
  }

  GetStudent = (name, grade) => {
    let newStudent;
    if (this.state.student.length == 0) {
      newStudent = {
        id: 1,
        name: name,
        grade: grade,
        inEdit: false
      }
    } else {
      newStudent = {
        id: this.state.student[this.state.student.length - 1].id + 1,
        name: name,
        grade: grade,
        inEdit: false
      }
    }
    this.setState({ student: [...this.state.student, newStudent] })
  }

  DelStudent = (id) => {
    let newStudent = [...this.state.student];
    let index = newStudent.findIndex(stu => stu.id == id);
    if (index === -1) {
      return;
    }

    newStudent.splice(index, 1);
    this.setState({ student: [...newStudent] })
  }

  newStudent = [] // לא פתרון - יוצר באג עם עריכה של כמה שמות ושומרים אחד מהם
  Edit = (event) => {
    let id = event.target.dataset.index
    this.newStudent = [...this.state.student];
    let index = this.newStudent.findIndex(stu => stu.id == id);
    this.newStudent[index].name = event.target.value;
  }

  SaveStudent = (id) => {
    let index = this.newStudent.findIndex(stu => stu.id == id);
    if (this.newStudent[index] == null || String(this.newStudent[index].name).trim() == "") return
    this.newStudent[index].inEdit = false
    this.setState({ student: [...this.newStudent] })
  }

  OpenEditStudent = (id) => {
    let newStudent = [...this.state.student];
    let index = newStudent.findIndex(stu => stu.id == id);
    newStudent[index].name = <input className='EditInput' data-index={id} onChange={(event) => { this.Edit(event) }} type="text" style={{ border: "solid 1px black" }} />
    newStudent[index].inEdit = true
    this.setState({ student: [...newStudent] })
  }


  render() {
    return (
      <div>
        <CCInput SendStudent={this.GetStudent} />
        <FCStudentList SaveStudent={this.SaveStudent} OpenEditStudent={this.OpenEditStudent} DelStudent={this.DelStudent} students={this.state.student} />
      </div>
    )
  }
}
