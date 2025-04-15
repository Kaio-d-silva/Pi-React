const Login = () => {
    return (
  <>
    <div style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",backgroundColor: "#71cd97",width: "100vw",height: "100vh",padding: "0", margin: "0"}}>

      <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",width: "25%",padding: "2em",backgroundColor: "white",borderRadius: "1rem",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)", marginTop: "1em"}}>
        <div style={{display: "flex",alignItems: "center",flexDirection: "column",justifyContent: "center",width: "100%",marginBottom: "1em"}}>
        <h1 style={{marginBottom: "1em"}}> login</h1>
        <div style={{backgroundColor: "#71cd97", height:"3px", width:"100%",marginBottom: "2em"}}></div>
          <label><strong>Email</strong></label>
          <input type="email" name="email" id="email" required style={{ marginTop: "0.5em", width: "70%" }} />
        </div>

        <div style={{
          display: "flex",alignItems: "center",flexDirection: "column",justifyContent: "center",width: "100%",marginBottom: "1em"}}>
          <label><strong>Senha</strong></label>
          <input type="password" name="senha" id="senha" required style={{ marginTop: "0.5em", width: "70%" }} />
        </div>

        <button type="submit" style={{width: "100%",height:"25%",padding: "0.5em",borderRadius: "0.5em",backgroundColor: "#71cd97",color: "white",fontWeight: "bold",border: "none",cursor: "pointer"}}>Logar</button>
      </div>
    </div>
  </>
  );
};
export default Login