import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import ManegerStudent from '../student/ManegerStudents.js';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route path="/manegerStudent" exact component={ManegerStudent} />
        </BrowserRouter>
    );
}

export default AppRoutes;