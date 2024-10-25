const http = require('http')
const port = 8080

// 1 - Créez un objet student avec les propriétés suivantes :
let student = {
    name: 'Marie',
    age: 20,
    courses: []
};

// 2 - Accédez et modifiez les valeurs de l'objet :
student.age = 21;
student.grade = "A";

// 3 - Travaillez avec le tableau courses de l'objet :
student.courses = ["Math", "Physics", "Chemistry"];

// 4 - Affichez les résultats :
console.log("Objet student complet :");
console.log(student);

console.log("Index de 'Physics' :");
console.log(student.courses.indexOf('Physics'));

console.log("Nouvel array créé avec slice :");
console.log(student.courses.slice(0, 2));

const server = http.createServer(function (req, res) {
    res.write('Hello World!')
    res.end()
})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log('Server is listening on port ' + port);
    }
})