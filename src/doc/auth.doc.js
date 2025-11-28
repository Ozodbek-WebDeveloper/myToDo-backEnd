/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 */




/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 6
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */



/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get current logged-in user info
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns the authenticated user's profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 roles:
 *                   type: string
 *                 avatar:
 *                   type: string
 *                   example: "http://localhost:8000/static/avatar123.jpg"
 *                 isActive:
 *                   type: boolean
 *                 settings:
 *                   type: object
 *                   properties:
 *                     themeDark:
 *                       type: boolean
 *       401:
 *         description: Unauthorized – invalid or missing token
 */


/**
 * @swagger
 * /auth/edit/{id}:
 *   put:
 *     summary: Update user information
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ozodbek"
 *               email:
 *                 type: string
 *                 example: "ozodbek@example.com"
 *               avatar:
 *                 type: string
 *                 example: "http://localhost:8000/static/avatar123.jpg"
 *               phone:
 *                 type: string
 *                 example: "+998901234567"
 *               address:
 *                 type: string
 *                 example: "Tashkent, Uzbekistan"
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: "1995-05-21"
 *               bio:
 *                 type: string
 *                 example: "Frontend developer"
 *               settings:
 *                 type: object
 *                 properties:
 *                   themeDark:
 *                     type: boolean
 *                     example: false
 *     responses:
 *       200:
 *         description: User successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "67a1b2c3d4e5f67890123456"
 *                     name:
 *                       type: string
 *                       example: "Ozodbek"
 *                     email:
 *                       type: string
 *                       example: "ozodbek@example.com"
 *                     avatar:
 *                       type: string
 *                       example: "http://localhost:8000/static/avatar123.jpg"
 *                     phone:
 *                       type: string
 *                       example: "+998901234567"
 *                     address:
 *                       type: string
 *                       example: "Tashkent"
 *                     dateOfBirth:
 *                       type: string
 *                       format: date
 *                     bio:
 *                       type: string
 *                       example: "Frontend developer"
 *                     roles:
 *                       type: string
 *                       example: "USER"
 *                     isActive:
 *                       type: boolean
 *                       example: true
 *                     settings:
 *                       type: object
 *                       properties:
 *                         themeDark:
 *                           type: boolean
 *                           example: false
 *       400:
 *         description: Invalid data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /auth/getUsers:
 *   post:
 *     summary: Barcha foydalanuvchilarni olish
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: number
 *                 example: 1
 *               size:
 *                 type: number
 *                 example: 10
 *     responses:
 *       200:
 *         description: Foydalanuvchilar ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: number
 *                   example: 42
 *                 res:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       roles:
 *                         type: string
 *                       avatar:
 *                         type: string
 *                       isActive:
 *                         type: boolean
 *                       settings:
 *                         type: object
 *                         properties:
 *                           themeDark:
 *                             type: boolean
 *       401:
 *         description: Token noto‘g‘ri yoki yo‘q
 *       500:
 *         description: Server xatosi
 *

 *
 * /auth/user/{id}:
 *   delete:
 *     summary: Foydalanuvchini o‘chirish
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O‘chiriladigan foydalanuvchi ID raqami
 *     responses:
 *       200:
 *         description: Foydalanuvchi muvaffaqiyatli o‘chirildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted successfully
 *       404:
 *         description: Foydalanuvchi topilmadi
 *       500:
 *         description: Server xatosi
 */


//-***************************************** todo start**************************************
/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: Todo management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           example: 671f0e8a23c5b4f9b12a0cde
 *         auther:
 *           type: string
 *           example: 671f0e8a23c5b4f9b12a0cdd
 *         title:
 *           type: string
 *           example: "Finish Swagger docs"
 *         description:
 *           type: string
 *           example: "Write Swagger documentation for the Todo API"
 *         isCompleted:
 *           type: boolean
 *           example: false
 *         priority:
 *           type: string
 *           enum: [low, medium, high]
 *           example: "medium"
 *         deadline:
 *           type: string
 *           format: date-time
 *           example: "2025-11-01T00:00:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Create new Todo
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - priority
 *             properties:
 *               title:
 *                 type: string
 *                 example: "my todo"
 *               description:
 *                 type: string
 *                 example: "my todo description"
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: "medium"
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-11-01T00:00:00.000Z"
 *     responses:
 *       201:
 *         description: Todo created successfully
 *       400:
 *         description: Invalid input data
 */

/**
 * @swagger
 * /todo/paging:
 *   post:
 *     summary: Get all todos of current user
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: number
 *                 example: 1
 *               size:
 *                 type: number
 *                 example: 10
 *               priority:
 *                  type: string
 *                  enum: [low, medium, high]
 *                  example: "medium"
 *               isCompleted:
 *                  type: boolean
 *                  example: false        
 *     responses:
 *       200:
 *         description: List of user's todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */


/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Get todo by ID
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */

/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: Update todo by ID
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - priority
 *             properties:
 *               title:
 *                 type: string
 *                 example: "my todo"
 *               description:
 *                 type: string
 *                 example: "my todo description"
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: "medium"
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-11-01T00:00:00.000Z"
 *     responses:
 *       200:
 *         description: Todo updated successfully
 *       404:
 *         description: Todo not found
 */

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Delete todo by ID
 *     tags: [Todo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       404:
 *         description: Todo not found
 */



// ----------------------------------------------------------------------------------------------EXPENSES---------------------------------------------

/**
 * @swagger
 * components:
 *   schemas:
 *     ExpenseCategoryInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Food

 *     ExpenseCategory:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "672c9fbd8371bfb1a987fa12"
 *         name:
 *           type: string
 *           example: Food
 *         createdAt:
 *           type: string
 *           example: "2025-02-05T12:34:00.000Z"
 *         updatedAt:
 *           type: string
 *           example: "2025-02-05T12:35:00.000Z"
 */


/**
 * @swagger
 * /expenses/category:
 *   post:
 *     summary: Create a new expense category
 *     tags: [Expense Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseCategoryInput'
 *     responses:
 *       201:
 *         description: Category created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExpenseCategory'
 */

/**
 * @swagger
 * /expenses/category/{id}:
 *   put:
 *     summary: Update expense category
 *     tags: [Expense Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseCategoryInput'
 *     responses:
 *       200:
 *         description: Category updated
 *         content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/ExpenseCategory'  
 */
/**
 * @swagger
 * /expenses/category/{id}:
 *   delete:
 *     summary: Delete category
 *     tags: [Expense Category]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted
 */
/**
 * @swagger
 * /expenses/allCategory:
 *   get:
 *     summary: Get all expense categories
 *     tags: [Expense Category]
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExpenseCategory'
 */







/**
 * @swagger
 * components:
 *   schemas:
 *     ExpenseItemInput:
 *       type: object
 *       required:
 *         - categoryId
 *         - name
 *       properties:
 *         categoryId:
 *           type: string
 *           example: "672c9fbd8371bfb1a987fa12"
 *         name:
 *           type: string
 *           example: "Bread"

 *     ExpenseItem:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "672ca4f2a23c4e55fa1ade88"
 *         categoryId:
 *           type: string
 *           example: "672c9fbd8371bfb1a987fa12"
 *         name:
 *           type: string
 *           example: "Bread"
 *         createdAt:
 *           type: string
 *           example: "2025-02-05T12:34:00.000Z"
 *         updatedAt:
 *           type: string
 *           example: "2025-02-05T12:36:00.000Z"
 */




/**
 * @swagger
 * /expenses/item:
 *   post:
 *     summary: Create new expense item
 *     tags: [Expense Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseItemInput'
 *     responses:
 *       201:
 *         description: Item created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExpenseItem'
 */


/**
 * @swagger
 * /expenses/item/{id}:
 *   put:
 *     summary: Update expense item
 *     tags: [Expense Item]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseItemInput'
 *     responses:
 *       200:
 *         description: Item updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExpenseItem'
 */


/**
 * @swagger
 * /expenses/item/{id}:
 *   delete:
 *     summary: Delete expense item
 *     tags: [Expense Item]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item deleted
 */


/**
 * @swagger
 * /expenses/allItem:
 *   get:
 *     summary: Get all expense items
 *     tags: [Expense Item]
 *     responses:
 *       200:
 *         description: List of all items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExpenseItem'
 */






/**
 * @swagger
 * components:
 *   schemas:
 *     ExpenseInput:
 *       type: object
 *       required:
 *         - itemId
 *         - name
 *         - description
 *         - price
 *         - paymentMethod
 *       properties:
 *         itemId:
 *           type: string
 *           example: "672ca4f2a23c4e55fa1ade88"
 *         name:
 *           type: string
 *           example: "Lunch"
 *         description:
 *           type: string
 *           example: "Ordered food at the restaurant"
 *         price:
 *           type: number
 *           example: 35.5
 *         date:
 *           type: string
 *           example: "2025-02-05T14:20:00.000Z"
 *         paymentMethod:
 *           type: string
 *           example: "Cash"
 *         receipt_image:
 *           type: string
 *           example: "/uploads/receipt_123.png"

 *     Expense:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "672cb3f2b55ddf21ce45f322"
 *         itemId:
 *           type: string
 *           example: "672ca4f2a23c4e55fa1ade88"
 *         name:
 *           type: string
 *           example: "Lunch"
 *         description:
 *           type: string
 *           example: "Ordered food at the restaurant"
 *         price:
 *           type: number
 *           example: 35.5
 *         date:
 *           type: string
 *           example: "2025-02-05T14:20:00.000Z"
 *         paymentMethod:
 *           type: string
 *           example: "Cash"
 *         receipt_image:
 *           type: string
 *           example: "/uploads/receipt_123.png"
 *         createdAt:
 *           type: string
 *           example: "2025-02-05T13:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           example: "2025-02-05T13:30:00.000Z"
 */


/**
 * @swagger
 * /expenses/expense:
 *   post:
 *     summary: Create new expense
 *     tags: [Expense]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseInput'
 *     responses:
 *       201:
 *         description: Expense created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 */


/**
 * @swagger
 * /expenses/expense/{id}:
 *   put:
 *     summary: Update expense
 *     tags: [Expense]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExpenseInput'
 *     responses:
 *       200:
 *         description: Expense updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 */


/**
 * @swagger
 * /expenses/expense/{id}:
 *   delete:
 *     summary: Delete expense
 *     tags: [Expense]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Expense deleted
 */


/**
 * @swagger
 * /expenses/expense/{id}:
 *   get:
 *     summary: Get single expense
 *     tags: [Expense]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Expense found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 */


/**
 * @swagger
 * /expenses/allExpense:
 *   post:
 *     summary: Get all expenses with pagination and filters
 *     tags: [Expense]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: number
 *                 example: 1
 *                 description: Current page number
 *               size:
 *                 type: number
 *                 example: 10
 *                 description: Number of items per page
 *               categoryId:
 *                 type: string
 *                 example: "64f0e6b2a1c2d3e456789abc"
 *                 description: Optional category filter
 *               itemId:
 *                 type: string
 *                 example: "64f0e6b2a1c2d3e456789def"
 *                 description: Optional item filter
 *     responses:
 *       200:
 *         description: List of expenses with pagination info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: number
 *                   example: 42
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Expense'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
