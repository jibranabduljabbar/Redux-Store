import { connect } from "react-redux";

function App({
  adminname,
  role,
  email,
  code,
  password,
  userrole,
  user_verified,
  users,
}) {
  return (
    <>
      <h1 align="center">Admin Panel</h1>
      <h2>Admin Information:</h2>
      <ul>
        <li>{adminname}</li>
        <li>{role}</li>
        <li>{email}</li>
        <li>{code}</li>
        <li>{password}</li>
      </ul>
      <h2>User Information:</h2>
      <ul>
        <li>
          Users:{" "}
          <ul>
            {users.map((e, index) => {
              return (
                <>
                  <br />
                  <li key={index}>Name: {e.name}</li>
                  <li key={index}>Email: {e.email}</li>
                  <li key={index}>Password: {e.password}</li>
                </>
              );
            })}
          </ul>
          <br />
        </li>
        <li>{userrole}</li>
        <li>{user_verified}</li>
        <li>{code}</li>
        <li>{password}</li>
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  adminname: state.admin.name,
  role: state.admin.role,
  email: state.admin.email,
  code: state.admin.code,
  password: state.admin.password,
  userrole: state.register.role,
  user_verified: state.register.user_verified,
  users: state.register.users,
});

export default connect(mapStateToProps, null)(App);
