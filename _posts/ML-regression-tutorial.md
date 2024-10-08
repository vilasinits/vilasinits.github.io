---
layout: z2c
title: "ML"
categories: misc
# image: /assets/camel1.JPG
---


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Machine Learning Regression Tutorial</title>
    <h3 style="text-align: justify;">As I attempt to dvelve deeper into ML, I thought it might be a better idea to document things, more for my sake, but also could be something of use to the community! Let me know if you find a bug here! :)</h3>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0 20px;
        }
        h1, h2, h3 {
            color: #ffffff;
        }
        h1 {
            font-size: 36px;
            margin-top: 20px;
        }
        h2 {
            font-size: 28px;
            margin-top: 20px;
            border-bottom: 2px solid #ffffff;
            padding-bottom: 5px;
        }
        h3 {
            font-size: 22px;
            margin-top: 15px;
        }
        p {
            font-size: 18px;
            margin-bottom: 15px;
        }
        ul {
            font-size: 18px;
            margin-bottom: 15px;
        }
        pre {
            background-color: #ffffff;
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
            overflow-x: auto;
        }
        table {
            width: 100%;
            margin-bottom: 20px;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ffffff; /* White border for a cleaner look */
            padding: 8px;
        }
        th {
            background-color: #2c3e50; /* Dark background for the header */
            color: black; /* White text for better contrast */
        }
        td {
            background-color: #34495e; /* Slightly lighter background for table rows */
            color: white; /* White text for visibility */
        }
        pre {
            background-color: #34495e; /* Dark background for equations */
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
            overflow-x: auto;
            color: #ecf0f1; /* Light color for equation text */
            font-family: 'Courier New', monospace; /* Ensures a consistent monospace font */
        }
        code {
            color: #e74c3c; /* Accent color for variables, like w_0, w_1, etc. */
        }
        .highlight {
            background-color: #f39c12;
            padding: 2px 5px;
            border-radius: 3px;
            color: orange;
        }
    </style>
</head>
<body>
    <h1>Introduction to Regression</h1>
    <p style="text-align: justify;">Regression analysis is a statistical method used to examine the relationship between one dependent variable (also called the target or response) and one or more independent variables (also called predictors or features). The goal of regression is to model this relationship and make predictions based on the data.</p>
    <h2 >1. What is Regression?</h2>
    <p style="text-align: justify;">At its core, <strong>regression</strong> is about understanding how the dependent variable changes when any of the independent variables change. It is used widely in data analysis to predict values, assess the strength of relationships, and infer patterns.</p>
    <h3>Example:</h3>
    <p style="text-align: justify;">Imagine you want to predict the height of a person based on their age. Using a regression model, you could predict future values based on past observations.</p>
    <p style="text-align: justify;"><strong>Types of Regression:</strong></p>
    <ul>
        <li><strong>Linear Regression:</strong> Assumes a linear relationship between the dependent and independent variables.</li>
        <li><strong>Non-Linear Regression:</strong> Assumes a non-linear relationship and uses more complex functions to describe the data.</li>
    </ul>
    <h2>2. Linear Regression (Without Machine Learning)</h2>
    <p style="text-align: justify;">Linear regression is one of the simplest forms of regression, where we fit a straight line to the data.</p>
    <p style="text-align: justify;"><strong>Basic Formula:</strong></p>
    <p>For one independent variable <em>X</em>, linear regression fits a model like this:</p>
    <pre>y = w_0 + w_1 X + ε</pre>
    <p>Where:</p>
    <ul>
        <li><strong>y</strong> is the predicted dependent variable.</li>
        <li><strong>w_0</strong> is the intercept (where the line crosses the y-axis).</li>
        <li><strong>w_1</strong> is the slope of the line.</li>
        <li><strong>X</strong> is the independent variable.</li>
        <li><strong>ε</strong> is the error or residual.</li>
    </ul>
    <p style="text-align: justify;">The line aims to minimize the difference between the actual values and the predicted values (usually by minimizing the <strong>sum of squared errors</strong>).</p>
    <h3>How It Works:</h3>
    <ol>
        <li><strong>Collect Data:</strong> For example, gather data on the height and age of several people.</li>
        <li><strong>Fit a Line:</strong> The goal is to find the line that best predicts height from age.</li>
        <li><strong>Make Predictions:</strong> Use the line to predict the height of a person based on their age.</li>
    </ol>
    <h3>Manual Example:</h3>
    <p style="text-align: justify;">Let’s say we have the following data for height and age:</p>
    <table>
        <tr>
            <th>Age (X)</th>
            <th>Height (y)</th>
        </tr>
        <tr>
            <td>10</td>
            <td>130 cm</td>
        </tr>
        <tr>
            <td>12</td>
            <td>140 cm</td>
        </tr>
        <tr>
            <td>14</td>
            <td>150 cm</td>
        </tr>
    </table>
    <p style="text-align: justify;">You can fit a line that models the relationship between age and height. The resulting equation might look something like:</p>
    <pre>Height = 100 + 3 × Age</pre>
    <p style="text-align: justify;">This means that for every additional year of age, the height increases by 3 cm.</p>
    <h2>3. Non-Linear Regression (Without Machine Learning)</h2>
    <p style="text-align: justify;">Sometimes, the relationship between the variables isn’t a straight line. In such cases, we use <strong>non-linear regression</strong> to fit curves to the data.</p>
    <p style="text-align: justify;"><strong>Basic Example:</strong> If the relationship is quadratic, the model would look like:</p>
    <pre>y = w_0 + w_1 X + w_2 X² + ε</pre>
    <p style="text-align: justify;">Here, we have introduced a quadratic term <em>X²</em>, which allows the model to fit a curve rather than a straight line.</p>
    <h3>Manual Example:</h3>
    <p style="text-align: justify;">Consider a scenario where the height of a plant doesn’t increase linearly with time, but rather follows a curve (perhaps due to initial slow growth followed by rapid growth):</p>
    <table>
        <tr>
            <th>Time (X)</th>
            <th>Plant Height (y)</th>
        </tr>
        <tr>
            <td>1 month</td>
            <td>5 cm</td>
        </tr>
        <tr>
            <td>2 months</td>
            <td>20 cm</td>
        </tr>
        <tr>
            <td>3 months</td>
            <td>45 cm</td>
        </tr>
    </table>
    <p style="text-align: justify;">The relationship between time and plant height might be better modeled with a curve, such as:</p>
    <pre>Height = 2 + 3 × Time²</pre>
    <p style="text-align: justify;">This quadratic equation indicates that height grows faster as time progresses.</p>
    <h2>4. Visualizing Linear and Non-Linear Regression</h2>
    <p style="text-align: justify;">In <strong>linear regression</strong>, the goal is to fit a straight line through the data points. The slope of the line represents how much the dependent variable changes for a unit change in the independent variable.</p>
    <p style="text-align: justify;">In <strong>non-linear regression</strong>, the relationship is more complex. For instance, with quadratic regression, the curve allows for acceleration or deceleration in the growth rate.</p>
    <h3>Linear Regression Example:</h3>
    <p style="text-align: justify;">If you plotted the height vs. age data from earlier, the line would look like this:</p>
    <pre>y = 100 + 3X</pre>
    <p style="text-align: justify;">For non-linear regression, let’s say the relationship is quadratic. Your curve might look like this:</p>
    <pre>y = 2 + 3X²</pre>
    <h2>5. Moving to Machine Learning</h2>
    <p>Now that we understand the basic principles of regression, we can apply these same ideas using machine learning models. In the next steps, we'll use <strong>linear regression</strong> and <strong>polynomial regression</strong> from machine learning libraries, but the core concepts remain the same.</p>
    <p style="text-align: justify;">In machine learning, the computer does the work of finding the best fit automatically, by optimizing the parameters <em>w_0, w_1, …</em> to minimize the errors.</p>
    <p style="text-align: justify;">This basic understanding of regression will give you the intuition you need when applying machine learning to real-world problems, especially when dealing with complex relationships like those seen in weak lensing.</p>
    <h1>Machine Learning Regression Tutorial</h1>
    <p>In this tutorial, we will cover the basics of machine learning regression models, focusing on simple examples that provide intuition. We'll begin with <strong>linear regression</strong>, move to <strong>polynomial regression</strong>, and finally introduce <strong>regularization techniques</strong> like <strong>Ridge</strong> and <strong>Lasso regression</strong>. By the end, you'll have a better understanding of how these models can be used for parameter estimation in weak lensing.</p>
    <hr>
    <h2>1. Introduction to Regression</h2>
    <p style="text-align: justify;">Regression is a type of <strong>supervised learning</strong> where the goal is to predict a continuous target variable. For example, predicting galaxy masses from lensing shear values.</p>
    <p style="text-align: justify;">In its simplest form, <strong>linear regression</strong> models the relationship between an independent variable X and a dependent variable y as a straight line:</p>
    <pre>
    y = w_0 + w_1 X + ε
    </pre>
    <p>Where:</p>
    <ul>
        <li>w_0 is the intercept (bias),</li>
        <li>w_1 is the slope (coefficient),</li>
        <li>ε is the error term.</li>
    </ul>
    <h3>Code Example</h3>
    <pre>
    from sklearn.linear_model import LinearRegression
    lin_reg = LinearRegression()
    lin_reg.fit(X_train, y_train)
    y_pred = lin_reg.predict(X_test)
    </pre>
    <h2>2. Multiple Linear Regression</h2>
    <p style="text-align: justify;">When you have more than one feature (input), the model becomes a <strong>multiple linear regression</strong>. The equation is:</p>
    <pre>
    y = w_0 + w_1 X_1 + w_2 X_2 + ... + w_n X_n + ε
    </pre>
    <p style="text-align: justify;">This model is still linear in nature but allows us to incorporate more features, which is useful in cosmological parameter estimation where many variables might influence the outcome.</p>
    <hr>
    <h2>3. Polynomial Regression</h2>
    <p style="text-align: justify;">Sometimes, the relationship between X and y isn't linear. In such cases, we can use <strong>polynomial regression</strong>, which introduces polynomial terms to the model. For example, a quadratic model would look like this:</p>
    <pre>
    y = w_0 + w_1 X + w_2 X^2 + ε
    </pre>
    <p style="text-align: justify;">In Python, we use the <code>PolynomialFeatures</code> transformer from Scikit-learn:</p>
    <pre>
    from sklearn.preprocessing import PolynomialFeatures
    poly_features = PolynomialFeatures(degree=2)
    X_poly = poly_features.fit_transform(X)
    </pre>
    <h3>Code Example</h3>
    <pre>
    poly_reg = LinearRegression()
    poly_reg.fit(X_poly, y)
    </pre>
    <hr>
    <h2>4. Regularization (Ridge and Lasso Regression)</h2>
    <p style="text-align: justify;"><strong>Overfitting</strong> happens when the model is too complex and fits the noise in the data rather than the true signal. Regularization techniques like <strong>Ridge</strong> and <strong>Lasso</strong> help by adding a penalty term to the model's loss function, preventing overfitting.</p>
    <ul>
        <li><strong>Ridge Regression</strong> (L2 Regularization) adds a penalty on the squared magnitude of the coefficients:
        <pre>Ridge: min ||y - X w||² + α ||w||²</pre></li>

        <li><strong>Lasso Regression</strong> (L1 Regularization) adds a penalty on the absolute magnitude of the coefficients:
        <pre>Lasso: min ||y - X w||² + α ||w||₁</pre></li>
    </ul>
    <h3>Code Example for Ridge</h3>
    <pre>
    from sklearn.linear_model import Ridge
    ridge_reg = Ridge(alpha=1.0)
    ridge_reg.fit(X_train, y_train)
    </pre>
    <h3>Code Example for Lasso</h3>
    <pre>
    from sklearn.linear_model import Lasso
    lasso_reg = Lasso(alpha=0.1)
    lasso_reg.fit(X_train, y_train)
    </pre>
    <hr>
    <h2>5. Application to Weak Lensing</h2>
    <p style="text-align: justify;">In weak lensing, we often try to infer galaxy properties from observational data, such as shear values. Regression models can help estimate these properties or fit a model to the lensing data.</p>
    <p style="text-align: justify;">By extending these techniques, we can apply machine learning to:</p>
    <ul>
        <li>Estimate mass density fields from weak lensing data,</li>
        <li>Infer cosmological parameters from observed shear and convergence fields,</li>
        <li>Regularize models to avoid overfitting due to noise in the data.</li>
    </ul>
    <p style="text-align: justify;">Explore the notebook to apply these methods on synthetic data or actual weak lensing observations.</p>
    <hr>
    <h2>Interactive Components</h2>
    <p style="text-align: justify;">Use the notebook provided to:</p>
    <ul>
        <li>Train and test various regression models.</li>
        <li>Adjust parameters like the degree of the polynomial or the regularization strength (α).</li>
        <li>Visualize how the model changes as you modify these parameters.</li>
    </ul>
    <p style="text-align: justify;">Download the notebook: <a href="sandbox:/mnt/data/ML_regression_intro.ipynb">ML Regression Notebook</a></p>

</body>
</html>
"""

