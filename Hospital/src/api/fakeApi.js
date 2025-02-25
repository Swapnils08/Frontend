const patients = [
    { id: 1, name: "Salman Khan", age: 30, disease: "Flu", contact: "123-456-7890", address: "123 Main St, City, Country", admissionDate: "2024-01-10", history: "No known allergies." },
    { id: 2, name: "Shahid Kapoor", age: 25, disease: "Cold", contact: "987-654-3210", address: "456 Elm St, City, Country", admissionDate: "2024-01-15", history: "Asthma." },
    { id: 3, name: "Hritik Roshan", age: 40, disease: "Headache", contact: "456-789-1230", address: "789 Pine St, City, Country", admissionDate: "2024-01-20", history: "No known allergies." },
    { id: 4, name: "Aamir Khan", age: 50, disease: "Back Pain", contact: "321-654-9870", address: "123 Oak St, City, Country", admissionDate: "2024-02-05", history: "High blood pressure." },
    { id: 5, name: "Katrina Kaif", age: 35, disease: "Fever", contact: "654-321-9870", address: "456 Maple St, City, Country", admissionDate: "2024-02-10", history: "No known allergies." },
    { id: 6, name: "Priyanka Chopra", age: 38, disease: "Anxiety", contact: "234-567-8901", address: "789 Birch St, City, Country", admissionDate: "2024-02-12", history: "No known allergies." },
    { id: 7, name: "Deepika Padukone", age: 32, disease: "Migraine", contact: "567-890-1234", address: "123 Cedar St, City, Country", admissionDate: "2024-02-14", history: "No known allergies." },
    { id: 8, name: "Ranbir Kapoor", age: 28, disease: "Cough", contact: "876-543-2109", address: "456 Spruce St, City, Country", admissionDate: "2024-02-18", history: "No known allergies." },
    { id: 9, name: "Alia Bhatt", age: 26, disease: "Stomach Ache", contact: "432-123-9876", address: "789 Fir St, City, Country", admissionDate: "2024-02-20", history: "No known allergies." },
    { id: 10, name: "Varun Dhawan", age: 31, disease: "Sore Throat", contact: "321-876-5432", address: "123 Pineapple St, City, Country", admissionDate: "2024-02-22", history: "No known allergies." },
    { id: 11, name: "Kareena Kapoor", age: 40, disease: "Joint Pain", contact: "654-987-4321", address: "456 Lavender St, City, Country", admissionDate: "2024-02-25", history: "No known allergies." },
    { id: 12, name: "Sonam Kapoor", age: 34, disease: "Tiredness", contact: "987-123-7654", address: "789 Dahlia St, City, Country", admissionDate: "2024-02-28", history: "No known allergies." },
    { id: 13, name: "Jacqueline Fernandez", age: 36, disease: "Nausea", contact: "765-432-1234", address: "123 Rose St, City, Country", admissionDate: "2024-03-02", history: "No known allergies." },
    { id: 14, name: "Sidharth Malhotra", age: 30, disease: "Fatigue", contact: "890-123-6547", address: "456 Lily St, City, Country", admissionDate: "2024-03-05", history: "No known allergies." },
    { id: 15, name: "Vicky Kaushal", age: 33, disease: "Chest Pain", contact: "543-210-9876", address: "789 Magnolia St, City, Country", admissionDate: "2024-03-08", history: "No known allergies." }
];


export const fetchPatients = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(patients);
        }, 1000);
    });
};

export const fetchPatientById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const patient = patients.find(p => p.id === id);
            resolve(patient);
        }, 1000);
    });
};
