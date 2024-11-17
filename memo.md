# Cathy's Update

## 1. Search by User First Name:

- Add fields for both first and last names into the form.
- Modify search API in `server.js` to implement direct interaction with the `db.json` file, replacing the current mock data on the server side. Example: `GET /api/clients/search?firstName=cathy`
- TBD: The search index is based on the first name for now. What would be the most logical attributes to include in the return outputs?

## 2. Retrieve Specific User:

- Populate the relevant fields in the client form with the retrieved data.
- Add a retrieval API in `server.js`: `GET /api/client/{id}`
- Modify the front-end user interface accordingly.

## 3. Update User Information:

- Add an update API in `server.js`: `PUT /api/update-user/{id}`
- Successfully integrate with `db.json` to reflect the updates made.
- Add a results button to prompt navigation to the results page. -> TBD: Displaying the newly resulting page.

## Submit Newly Created User Information:

- Implement and handle the submit form API in `server.js`, ensuring interaction with `db.json`: `POST /api/submit-form`

## Results Page:

- TBD: Change the "back to form" redirect to "client page" to facilitate data updates? Now it redirects to the “candidate form page."

