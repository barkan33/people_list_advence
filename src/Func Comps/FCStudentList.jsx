import FCStudent from './FCStudent'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export default function FCStudentList(props) {
    const students = props.students;

    let printStudent;
    if (students.length > 0) {
        printStudent = students.map((value) => {
            return <ListItem
                key={value.id}
                disableGutters
                secondaryAction={
                    <IconButton onClick={() => props.DelStudent(value.id)}>
                        <DeleteForeverIcon sx={{ color: "red" }} />
                    </IconButton>
                }
            >
                <FCStudent name={value.name} grade={value.grade} id={value.id} />
                <IconButton style={{ marginLeft: "auto" }} >
                    {value.inEdit ? <SaveIcon onClick={() => { props.SaveStudent(value.id) }} /> : <EditIcon onClick={() => props.OpenEditStudent(value.id)} />}
                </IconButton>
            </ListItem>
        })
    }
    return (
        <div className='FCStudentList'>
            <List >
                {printStudent}
            </List>
        </div>
    )
}
