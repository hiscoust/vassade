export interface DataObject {
    name: string | any
    id: string
    icon: any
}

export interface QuestionsIndex {
    [key: string]: QuestionsArray[]

}

export interface QuestionsArray {
    questionTitle: string
    checkbox?: boolean
    options: QuestionOptions[]
}

export interface QuestionOptions { optionTitle: string, icon: IconData, checked: boolean, href?: string, id?: string }

interface IconData { name: string, categorie: string, size?: number, width?: number, height?: number, color?: string }