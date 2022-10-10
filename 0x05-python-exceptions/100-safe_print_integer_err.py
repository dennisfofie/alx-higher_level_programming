#!/usr/bin/python3
from sys import stderr as st
def safe_print_integer_err(value):
    try:
        print("{:d}".format(value))
        return True
    except (ValueError, TypeError) as err:
        st.write("Exception: {}\n".format(err))
        return False
