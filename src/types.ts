export type Teacher = {
    id: number,
    name: String,
    email: String,
    password: String,
    image: String
}

export type Pupil = {
    id: number
    name: String
    email: String
    password: String
    image: String
    score: number
}


export type Exercise = {
    id: Number
    exercise: String
    answer: String
    alternative1: String
    alternative2: String
    alternative3: String
    alternative4: String
    time: Date
    teacher: Teacher
    teacherId: Number
}
