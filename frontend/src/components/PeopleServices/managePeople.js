import React from 'react';
import { NavLink } from 'react-router-dom';
import './managePeople.css';
import addPeople from '../../images/addPeo.png';
import searchPeople from '../../images/viewPeo.jpg';
import generate from '../../images/Generate.png';
import viewPeople from '../../images/viewPep.png';
import { ManagePeopleContainer, ManagePeopleH1, ManagePeopleWrapper, ManagePeopleCard, ManagePeopleIcon, ManagePeopleH2 } from './managePeopleElements'


function ManagePeople() {
    return (
        <div>
            <ManagePeopleContainer className="peoplePage" id='managePeople'>
                <h3 className=" font-bold peopleTitle">HomePage</h3>
                <ManagePeopleH1>Select task</ManagePeopleH1>
                <ManagePeopleWrapper>
                    <ManagePeopleCard>
                        <ManagePeopleH2>USER LOGIN</ManagePeopleH2>
                        <ManagePeopleIcon src={addPeople} />
                        <h4><NavLink to='/create'>Continue</NavLink></h4>

                    </ManagePeopleCard>
                    <ManagePeopleCard>
                        <ManagePeopleH2>ALUMANI </ManagePeopleH2>
                        <ManagePeopleIcon src={viewPeople} />
                        <h4><NavLink to='/peoplesList'>Continue</NavLink></h4>

                    </ManagePeopleCard>
                    <ManagePeopleCard>
                        <ManagePeopleH2>FIND A PEOPLE</ManagePeopleH2>
                        <ManagePeopleIcon src={searchPeople} />
                        <h4><NavLink to='/searchPeople'>Continue</NavLink></h4>

                    </ManagePeopleCard>
                    <ManagePeopleCard>
                        <ManagePeopleH2>REPORT</ManagePeopleH2>
                        <ManagePeopleIcon src={generate} />
                        <h4><NavLink to='/PeopleReport'>Continue</NavLink></h4>

                    </ManagePeopleCard>
                </ManagePeopleWrapper>
            </ManagePeopleContainer>


        </div>
    );
}

export default ManagePeople;