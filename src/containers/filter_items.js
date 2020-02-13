import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ButtonLine from '../form/button_line';

const FilterItems = (props) => {

    let listItems;
    if (props.regions.length > 0 && props.environs.length > 0) {
        listItems = (
            <ListGroup className='menu-items-list'>
                <ListGroupItem>
                    <ButtonLine labels={props.regions} category={'region'}/>
                </ListGroupItem>
                <ListGroupItem>
                    <ButtonLine labels={props.environs} category={'environ'}/>
                </ListGroupItem>
            </ListGroup>
        )
    }
    if (!listItems) return null;
    return listItems
};

export default FilterItems