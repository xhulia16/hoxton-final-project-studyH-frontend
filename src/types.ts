
export type Teacher = {
    id: number,
    name: String,
    email: String,
    password: String,
    image: String
    classId: number
}

export type Pupil = {
    id: number
    name: String
    email: String
    password: String
    image: String
    score: number
    classId: number
}


export type Exercises = {
    id: Number
    exercise: String
    answered: Boolean
    alternative1: String
    alternative2: String
    alternative3: String
    alternative4: String
    time: Date
    teacher: Teacher
    teacherId: Number
}



