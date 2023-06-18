import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { WidgetStatus } from "../enums/WidgetStatus"



export interface IWidget {
    type: string
    data: {
        title: string
        link: string
        icon: ReactJSXElement
        isMoney: boolean
        counter: number
        status: WidgetStatus
    }
}
