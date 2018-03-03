export default [
    {
        text: 'Classes',
        highlight: true,
        url: '/classes',
        teacherView: true,
        studentView: true,
        id: "classes",
    },
    {
        text: 'Lessons',
        url: '/lessons',
        teacherView: true,
        studentView: false,
        id: "lessons",
    },
    {
        text: 'Libraries',
        url: '/libraries',
        teacherView: true,
        studentView: false,
        id: "libraries",
    },
    {
        text: 'Assignments',
        url: '/assignments',
        teacherView: false,
        studentView: true,
        id: "assignments"
    }
];