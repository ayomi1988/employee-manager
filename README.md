# First react assignment using typescript

This Employee Manager web App has been developed using bellow tech stacks

```bash
-React, Typescript, Node,MangoDB.
 ```
 
# To start the web app follow bellow instructions;
 
 
 1. Navigate to the backend directory and run bellow commands;
 ```bash
 npm install
 npm run start
 ```

 2. Navigate to the frontend directory and run bellow commands
 ```bash
npm install
npm run start
```
3. To test both the backend and frontend environments run bellow command inside the directory
```bash
npm run test
```

# API Document

https://documenter.getpostman.com/view/26058571/2s93CRKrH1#5af7d4d3-ca5a-44ba-8e05-a2772518cd70


# high-level architecture diagram 

![Alt text](https://drive.google.com/file/d/1jDiAgr4zSg0DTR3g66DNWCwIVTrsHz_7/view?usp=sharing "a title")


# Folder structure

```bash
employee-manager/
├── backend/
│   └── src/
│       ├── __tests__/
│       │   └── emp.test.ts
│       ├── config/
│       │   ├── config.ts
│       │   └── connection.ts
│       ├── controller/
│       │   └── employe.controller.ts
│       ├── interface/
│       │   └── interface.ts
│       ├── logs/
│       │   └── logger.ts
│       ├── model/
│       │   └── model.ts
│       ├── route/
│       │   └── employe.route.ts
│       ├── service/
│       │   └── employe.service.ts
│       ├── validation/
│       │   └── validationSchema.ts
│       ├── app.ts
│       └── server.ts/
│           ├── diagram!
│           └── :)
└── frontend/
    └── src/
        ├── api/
        │   └── api.ts
        ├── components/
        │   ├── Alerts/
        │   │   └── Alerts.tsx
        │   ├── buttons/
        │   │   ├── ButtonAction.tsx
        │   │   ├── ButtonBack.tsx
        │   │   ├── ButtonDelete.tsx
        │   │   ├── ButtonEdit.tsx
        │   │   ├── ButtonGrid.tsx
        │   │   ├── ButtonList.tsx
        │   │   ├── ButtonPrimary.tsx
        │   │   └── ButtonTypes.tsx
        │   ├── form/
        │   │   ├── EmployeForm.tsx
        │   │   ├── EmployeTypes.tsx
        │   │   ├── InputField.tsx
        │   │   └── SelectField.tsx
        │   ├── header/
        │   │   ├── index.tsx
        │   │   ├── Search.tsx
        │   │   └── TitleBar.tsx
        │   ├── loader/
        │   │   └── Loader.tsx
        │   ├── table/
        │   │   ├── TableCells.tsx
        │   │   └── types.tsx
        │   ├── EmployeeListGrid.tsx
        │   └── EmployeListTable.tsx
        ├── pages/
        │   ├── EmpDataManager.test.tsx
        │   ├── EmpDataManager.tsx
        │   ├── EmployeAdd.tsx
        │   ├── NoResults.tsx
        │   └── PageNotfound.tsx
        ├── store/
        │   ├── EmpServices.ts
        │   ├── EmpSlice.tsx
        │   ├── index.ts
        │   └── useDispatch.ts
        ├── theme/
        │   ├── CustomTheme.ts
        │   └── MainLayout.tsx
        ├── Validation/
        │   ├── EmployeSchema.tsx
        │   ├── EmpSlice.tsx
        │   ├── index.ts
        │   └── useDispatch.ts
        ├── App.tsx
        ├── index.tsx
        └── Route.tsx
     
     ```
     




