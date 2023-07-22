import React from 'react'
import Table from './Table'
import { Dragger } from './Dragger'
import { Planner } from './Planner'

export const MainContent = () => {
  return (
    <div className="main-container mt-4">
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5>Logistic Queue</h5>
          </div>
          <div className="card-body">
            <Table />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5>Planner</h5>
          </div>
          <div className="card-body">
            <Planner />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
