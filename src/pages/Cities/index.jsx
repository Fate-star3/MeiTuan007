import React, { useState, useEffect } from 'react';
import { CityWrapper } from './style'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getCitiesList } from './store/actionCreators'

const Cities = (props) => {
    const { cities, getCitiesDispatch} = props
    // console.log(cities);
    // 将城市信息渲染到页面上
    useEffect(() => {
        getCitiesDispatch()
    },[])

    const renderCities = () => {
        return cities.map(({ id, nm }) => {
            return <Link
                className="city_name"
                // 路由除了页面跳转  还可以多页面传参
                to={{
                    pathname: '/home',
                    search: `name=${nm}`
                }}
                key={id}>
                {nm}
            </Link>
        })
    }
    return (
        <CityWrapper>
            {renderCities()}
        </CityWrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        cities: state.cities.CitiesList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCitiesDispatch() {
            dispatch(getCitiesList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)