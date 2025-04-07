import Student from "./model/students.js";

const resolvers = {
  Query: {
    getStudents: async () => {
      try {
        return await Student.find(); 
      } catch (error) {
        throw new Error("Error fetching students: " + error.message);
      }
    },


    getAllStudents: async () => {
      try {
        return await Student.find();  
      } catch (error) {
        throw new Error("Error fetching all students: " + error.message);
      }
    },


    getStudentByFilter: async (_, { Name, RegistrationNo }) => {
      try {
        const student = await Student.findOne({
          Name:{ $regex: new RegExp("^" + Name + "$", "i") }, 
          RegistrationNo: RegistrationNo
        });
    
        if (!student) {
          throw new Error("Student not found with this Registraion number ");
        }
    
        return student;
      } catch (error) {
        throw new Error("Error retrieving student: " + error.message);
      }
    },
  },
  
  Mutation: {
    createStudent: async (_, { input }) => {
      try {
        const newStudent = new Student(input);
        await newStudent.save();
        return newStudent;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

export default resolvers;
