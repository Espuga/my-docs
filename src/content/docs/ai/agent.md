---
title: 🛠️ Tool Function as Agent
description: Extend AI capabilities using Python functions as tools
---

## 🧩 Overview

In this guide, you'll learn how to use **Tool Functions** with Ollama and Mistral to act as agents — allowing the AI to call external Python functions based on user input.

---

## 1. 🚀 What is a Tool Function?

Tool functions (also known as function calling or agents) enable AI models to trigger specific backend logic.

Example: If a user says “Get today’s weather,” the AI can trigger a `get_weather()` function.

---

## 2. 📦 Requirements

* Python ≥ 3.7
* [Ollama installed](https://ollama.com/download)
* `ollama` Python library:

```bash
pip install ollama
```

---

## 3. 🔧 Defining a Tool Function

Define your function and describe it so the model knows how to use it:

```python
import datetime

def get_time():
  return f"🕒 Current time is {datetime.datetime.now().strftime('%H:%M:%S')}"
```

---

## 4. 💬 Chat with Tool Function Example

```python
import ollama

# Define available tools
functions = [
  {
    "name": "get_time",
    "description": "Returns the current system time",
    "parameters": {
      "type": "object",
      "properties": {},
      "required": []
    }
  }
]

# Base prompt
messages = [
    {
        "role": "user",
        "content": "What time is it?"
    }
]

# AI responds with a function call
response = ollama.chat(
  model='mistral',
  messages=messages,
  functions=functions,
  function_call='auto'  # Let AI decide
)

# Simulate agent behavior
if response.get("function_call"):
  if response["function_call"]["name"] == "get_time":
    result = get_time()
    messages.append({"role": "function", "name": "get_time", "content": result})

    # Final answer from the AI with tool response
    final_response = ollama.chat(model='mistral', messages=messages)
    print(final_response["message"]["content"])
else:
  print(response["message"]["content"])
```

---

## 5. 📤 Example Output

```
User: What time is it?
🛠️ Function executed: get_time()
Assistant: The current time is 14:37:52.
```

---

## 🔍 More Ideas for Tools

You can use this same pattern to:

* Query databases
* Access external APIs (e.g., weather, stock prices)
* Perform calculations
* Read file contents

---

## 📚 Resources

* [Ollama Docs](https://ollama.com/library)

> 🧠 Let your AI do more than just talk — let it act.
