import PropTypes from 'prop-types';

function ProtectedRoute({ children }) {
    let body = children;

    return body;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
