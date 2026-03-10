const getUsers = async () => {
  try {
    // 1. The Network Request (The "telephone call")
    const response = await fetch("http://localhost:3000/users");

    // 2. Error handling if Server A is down or 404
    if (!response.ok) {
      throw new Error(`Server A responded with status: ${response.status}`);
    }

    // 3. Unwrapping the JSON
    const users = await response.json();

    console.log(users);
  } catch (err) {
    console.error("--- Server B ERROR ---", err.message);
  }
};
// getUsers();

async function createUserOnServerA(name, role) {
  try {
    const newUser = { name, role };

    const response = await fetch("http://localhost:3000/users", {
      method: "POST", // 1. Specify the method
      headers: {
        "Content-Type": "application/json", // 2. Tell Server A to expect JSON
      },
      body: JSON.stringify(newUser), // 3. Turn the JS object into a string
    });

    if (!response.ok) {
      throw new Error(`Failed to create: ${response.status}`);
    }

    const result = await response.json();
    console.log("--- Server B Log: User Created Successfully ---");
    console.log(result);
  } catch (err) {
    console.error(
      "--- Server B Error: Could not forward user ---",
      err.message,
    );
  }
}
// createUserOnServerA("Groot", "Guard");

async function updateUserOnServerA(id, updateData) {
  try {
    // Note the URL: we must append the ID to the path
    const url = `http://localhost:3000/users/${id}`;

    const response = await fetch(url, {
      method: "PUT", // Use PUT for full updates or PATCH for partials
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      // Handles 404 (User not found) or 500 (Server error)
      const errorText = await response.text();
      throw new Error(`Update Failed (${response.status}): ${errorText}`);
    }

    const updatedUser = await response.json();
    console.log(`--- Server B Log: User ${id} Updated ---`);
    console.table(updatedUser); // Using .table for a cleaner Arch terminal look
  } catch (err) {
    console.error("--- Server B Error: Update logic failed ---", err.message);
  }
}
// updateUserOnServerA(1, { role: "SuperAdmin" });

async function deleteUserOnServerA(id) {
  try {
    const url = `http://localhost:3000/users/${id}`;

    console.log(`--- Server B: Sending DELETE request for ID ${id} ---`);

    const response = await fetch(url, {
      method: "DELETE", // No body or headers needed for a simple delete!
    });

    if (!response.ok) {
      throw new Error(`Delete failed with status: ${response.status}`);
    }

    // Server A usually sends a text message or the deleted object back
    const message = await response.text();
    console.log("--- Server B Log: Success ---");
    console.log(`Result: ${message}`);
  } catch (err) {
    console.error("--- Server B Error: Could not delete user ---", err.message);
  }
}

// Test call: Deleting User 2
deleteUserOnServerA(2);
