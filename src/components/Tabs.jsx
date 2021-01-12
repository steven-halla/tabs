import React, {useState } from 'react';
import TabsView from './TabsView';

const Tabs = (props) => {
    const [tabs, setTabs] = useState([
        {title: "tab 1", content: "This is tab 1"},
        {title: "tab 2", content: "This is tab 2"},
        {title: "tab 3", content: "This is tab 3"},
        {title: "tab 4", content: "This is tab 4"} 

    ]);
    const [selected, setSelected] = useState(0);

    const tabHandler = (index) => {
        setSelected(index);
    }

    return(
        <div>
            {
                tabs.map((val, index) => 
                    <button key={index} onClick={ event => tabHandler(index)} > {val.title} </button>
                )
            }
            <TabsView tabs={tabs} selected={selected} />
        </div>
    )
}

export default Tabs;