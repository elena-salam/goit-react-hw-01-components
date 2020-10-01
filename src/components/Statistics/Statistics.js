import React from 'react';
import PropTypes from 'prop-types';
// import statisticalData from '../../data/statistical-data.json';
import styled from 'styled-components';

const Section = styled.section`
margin: 0 auto;
margin-bottom: 40px;
padding-top: 20px;
width: 360px;
text-align: center;
background-color: #fff;
`;
const Title = styled.h2`
margin: 20 auto;
padding-bottom: 20px;
/* text-align: center; */
color: #585a55;

`;

const StatsList = styled.ul`
display: flex;

`;

const StatsItem = styled.li`
display: flex;
flex-direction: column;
padding: 10px 0;
width:72px;
/* text-align: center; */
border: 1px solid #e4e9f0;
background-color: #6f716d;
`;

const DocType = styled.span`
padding-bottom: 5px;
font-size: 16px;
color: white;

`;
const PercentOfUse = styled.span`
font-size: 18px;
font-weight: 700;
color: #fff;

`;


function Statistics({title, stats}){
    return(
        <Section>
            {title.length>0 && (
            <Title>{title}</Title>
            )}
            <StatsList>
              {stats.map(data => <StatsItem key = {data.id}><DocType>{data.label}</DocType><PercentOfUse>{data.percentage}%</PercentOfUse></StatsItem>)}
            </StatsList>
        </Section>
    )
}
Statistics.defaultProps = {
    title: '',
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
    
}

export default Statistics;