def chat_bot(message):
    if "سلام" in message:
        return "سلام! چطور می‌تونی کمکت کنم؟"
    elif "خداحافظ" in message:
        return "خداحافظ! روز خوبی داشته باشی."
    else:
        return "متاسفم، متوجه نشدم."

while True:
    user_input = input("تو: ")
    print("ربات:", chat_bot(user_input))