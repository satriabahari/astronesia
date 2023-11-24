import axios from "axios";

export const getData = async (resource, query) => {
  let response;
  if (query !== "q=undefined") {
    response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${resource}?${query}`,
    );
  } else {
    response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${resource}`,
    );
  }
  return response.data;
};

export const createData = async (resource, data) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${resource}`,
    data,
  );
  return response.data;
};

export const updateData = async (resource, data) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${resource}`,
    data,
  );
  return response.data;
};

export const deleteData = async (resource) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api${resource}`,
  );
  return response.data;
};

// export async function getStudents(query) {
//   const response = await prisma.student.findMany({
//     where: {
//       name: {
//         contains: query,
//       },
//     },
//   });
//   return response;
// }

// export async function createStudent(data) {
//   const response = await axios.post("/api/students", data);
//   return response;
// }

// export async function updateStudent(id, data) {
//   const response = await axios.patch(`/api/students/${id}`, data);
//   return response;
// }

// export async function getTeachers(query) {
//   const response = await prisma.teacher.findMany({
//     where: {
//       name: {
//         contains: query,
//       },
//     },
//   });
//   return response;
// }

// export async function createTeacher(data) {
//   const response = await axios.post("/api/teachers", data);
//   return response;
// }

// export async function updateTeacher(id, data) {
//   const response = await axios.patch(`/api/teachers/${id}`, data);
//   return response;
// }

// export async function getPublications(query) {
//   const response = await prisma.publication.findMany({
//     where: {
//       title: {
//         contains: query,
//       },
//     },
//   });
//   return response;
// }

// export async function createPublication(data) {
//   const response = await axios.post("/api/publications", data);
//   return response;
// }

// export async function updatePublication(id, data) {
//   const response = await axios.patch(`/api/publications/${id}`, data);
//   return response;
// }

// export async function getFaqs(query) {
//   const response = await prisma.faq.findMany({
//     where: {
//       question: {
//         contains: query,
//       },
//     },
//   });
//   return response;
// }

// export async function getFaq() {
//   const responseponse = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/faq/`,
//   );
//   return responseponse;
// }

// export async function createFaq(data) {
//   const response = await axios.post("/api/faq", data);
//   return response;
// }

// export async function updateFaq(id, data) {
//   const response = await axios.patch(`/api/faq/${id}`, data);
//   return response;
// }

// export async function getLibraries(query) {
//   const response = await prisma.library.findMany({
//     where: {
//       title: {
//         contains: query,
//       },
//     },
//   });
//   return response;
// }

// export async function createLibrary(data) {
//   const response = await axios.post("/api/library", data);
//   return response;
// }

// export async function updateLibrary(id, data) {
//   const response = await axios.patch(`/api/library/${id}`, data);
//   return response;
// }
