
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TTask, TTaskCategorySchema, TTaskCreate, TTaskUpadate} from "../interfaces/task.interface";
import { AppError } from "../errors/AppError";


@injectable()
export class TaskServices {
    create = async (payload: TTaskCreate, userId: number): Promise<TTask> => {
       const newTask = await prisma.task.create({ data:{...payload, userId }});

       return newTask as TTask;
   }

     findMany = async (categoryName?: string, userId?: number): Promise<TTaskCategorySchema[] | null> => {
        if (!categoryName) {
            const allTasksUsers = await prisma.task.findMany({ 
                where: {
                    userId: userId
                    } ,
                include:{
                    category: true
                }
    
            });
            return allTasksUsers
        }


        const categoryFound = await prisma.category.findFirst({
            where:
             {name: categoryName}})

        if (!categoryFound) {
            throw new AppError("category not found", 409)
        }

        if (categoryFound.userId !== userId) {
            throw new AppError("This users is not the category owner", 401)
        }

        const allTasks = await prisma.task.findMany({ 
            where: {
              userId, categoryId: categoryFound.id
            },
            include:{
                category: true
            }

        });
        
        return allTasks
    };

     findOne = async (taskId:  number):Promise<any> =>{
        const findTask = await prisma.task.findFirst({where: {
            id:taskId
        },
        include:{
            category: true
        }});
        return findTask;
    }

     update = async(taskId: number, payload: TTaskUpadate):Promise<TTask> =>{
        const updateTask = await prisma.task.update({where: {id:taskId}, data: payload})
            
        return updateTask;
    }

     delete = async(taskId:number):Promise<void> => {
        await prisma.task.delete({where: {id: taskId}})
    }
}
