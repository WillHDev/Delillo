import React, { Component } from 'react'
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './StaffDisplay.css'
import posed from 'react-pose';
import MasonryLayout from 'react-masonry-layout';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
animation: 1s ${fadeInUpAnimation};
`;
// const StaggerFade = posed.ul({
//     open: {
//         x: '0%',
//         delayChildren: 200,
//         staggerChildren: 50
//     },
//     closed: { x: '-100%', delay: 300 },
//     initialPose: 'closed'
// })

export default class StaffDisplay extends Component {
    render() {
        return (
            <div className="staff-display-container">
                <ul>
                    <MasonryLayout id="masonry-layout">
                        {this.props.staff.map((staff, i) => {
                            console.log('staff', staff);
                            return (
                                <FadeInUpDiv key={staff._id}>
                                    <div key={staff._id}>
                                        <h4> {staff.name}</h4>
                                        <img width="200" src={staff.img} alt={staff.img} />
                                    </div>
                                </FadeInUpDiv>
                            )
                        })}
                    </MasonryLayout>
                </ul>
            </div>
        )
    }
} 
