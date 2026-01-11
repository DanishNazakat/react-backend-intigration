import { useEffect, useState } from "react";
import { Signup } from "../../services/auth/auth";

const SignupForm = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [Fname, setUserFirstName] = useState("");
  const [Lname, setUserLastName] = useState("");
  const [shouldSignup, setShouldSignup] = useState(false);

  useEffect(() => {
    if (!shouldSignup) return;

    const handleSignup = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const userData = await Signup(Fname, Lname, Email, password);
        setUser(userData);
      } catch (err) {
        setError(err.message || "Signup failed");
        setUser(null);
      } finally {
        setIsLoading(false);
        setShouldSignup(false); // reset trigger
      }
    };

    handleSignup();
  }, [shouldSignup, Email, password]);

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={Email}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="fname"
        placeholder="first name"
        value={Fname}
        onChange={(e) => setUserFirstName(e.target.value)}
      />
      <input
        type="lname"
        placeholder="last name"
        value={Lname}
        onChange={(e) => setUserLastName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />
      <button
        onClick={() => setShouldSignup(true)}
        disabled={isLoading || !Email || !password || !Fname || !Lname}
      >
        {isLoading ? "Signup in..." : "Signup"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <h2>Welcome, {user.newUser.Fname}</h2>}
    </div>
  );
};

export default SignupForm;