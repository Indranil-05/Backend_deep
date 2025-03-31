import Student from "./model/students.js";

const resolvers = {
  Query: {
    getStudents: async () => {
      try {
        return await Student.find();  // Fetch all students from the database
      } catch (error) {
        throw new Error("Error fetching students: " + error.message);
      }
    },
    getAllStudents: async () => {
      try {
        return await Student.find();  // Fetch all students
      } catch (error) {
        throw new Error("Error fetching all students: " + error.message);
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
