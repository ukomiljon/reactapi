import { Document } from 'mongoose'

export interface Report extends Document {
    id?: string,
    title: string,
    type: string
}