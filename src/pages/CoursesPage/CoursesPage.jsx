import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import CoursePageCard from '../../components/CoursePageCard/CoursePageCard'

function CoursesPage() {
  return (
    <div>
        <div className="container">
            {/* Page Header */}
            <PageHeader title="Courses" />  

            <div>
            <CoursePageCard />
            </div>
        </div>
    </div>
  )
}

export default CoursesPage