const { ObjectId } = require('mongodb'); // Import ObjectId to use in the pipeline

// Función para obtener todas las citas
const GetSchedules = async (db) => {
    try {
        const schedulesCollection = db.collection('schedule'); // Access the 'schedule' collection

        // Aggregation pipeline to fetch schedules with user and patient data
        const schedules = await schedulesCollection.aggregate([
            {
                $addFields: {
                    id_user: { $toObjectId: "$id_user" },  // Convert id_user to ObjectId
                    id_patient: { $toObjectId: "$id_patient" }  // Convert id_patient to ObjectId
                }
            },
            {
                $lookup: {
                    from: "user", 
                    localField: "id_user", 
                    foreignField: "_id", 
                    as: "user" 
                }
            },
            {
                $lookup: {
                    from: "patient",
                    localField: "id_patient", 
                    foreignField: "_id", 
                    as: "patient" 
                }
            },
            {
                $unwind: "$user" 
            },
            {
                $unwind: "$patient" 
            }
        ]).toArray(); 

        return schedules;
    } catch (error) {
        console.error("Error in GetSchedules:", error);
        throw new Error('Failed to fetch schedules');
    }
};

module.exports = { GetSchedules };
