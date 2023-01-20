import {DropdownProps, SemanticShorthandItem, TabPaneProps} from 'semantic-ui-react'
import {ChangeEvent, ReactNode, SyntheticEvent} from 'react'
import {KeyAny} from './Common'


export type onSemanticInputEvent = (event: ChangeEvent, data: KeyAny) => void

export type onSemanticDropdownChangeEvent = (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void

export type SemanticPane = {pane?: SemanticShorthandItem<TabPaneProps>; menuItem?: any; render?: (() => ReactNode) | undefined; }
