
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TTask, TTaskCategorySchema, TTaskCreate, TTaskUpadate} from "../interfaces/task.interface";
import { taskReturnShema } from "../schemas/task.schema";

@injectable()

export class TaskServices {
    create = async (payload: TTaskCreate): Promise<TTask> => {
       const newTask = await prisma.task.create({ data:payload });

       return newTask as TTask;
   }

     findMany = async (categoryName?: string): Promise<TTaskCategorySchema[] | null> => {
        const allTasks = await prisma.task.findMany({ 
            where: {
                ...(categoryName && {
                    category: {name: categoryName}
                })
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
