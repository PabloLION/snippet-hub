# Variables

See also: [official documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)
With `$name` or `${name:default}`, you can insert the value of a variable. When a variable isn't set, its **default** or the empty string is inserted. When a variable is unknown (that is, its name isn't defined) the name of the variable is inserted and it is transformed into a placeholder.

## Variable List

| variables                | meaning                                                                            |
| :----------------------- | :--------------------------------------------------------------------------------- |
| TM_SELECTED_TEXT         | The currently selected text or the empty string                                    |
| TM_CURRENT_LINE          | The contents of the current line                                                   |
| TM_CURRENT_WORD          | The contents of the word under cursor or the empty string                          |
| TM_LINE_INDEX            | The zero-index based line number                                                   |
| TM_LINE_NUMBER           | The one-index based line number                                                    |
| TM_FILENAME              | The filename of the current document                                               |
| TM_FILENAME_BASE         | The filename of the current document without its extensions                        |
| TM_DIRECTORY             | The directory of the current document                                              |
| TM_FILEPATH              | The full file path of the current document                                         |
| RELATIVE_FILEPATH        | The relative (to the opened workspace or folder) file path of the current document |
| CLIPBOARD                | The contents of your clipboard                                                     |
| WORKSPACE_NAME           | The name of the opened workspace or folder                                         |
| WORKSPACE_FOLDER         | The path of the opened workspace or folder                                         |
| ==== DATE AND TIME ====  |
| CURRENT_YEAR             | The current year                                                                   |
| CURRENT_YEAR_SHORT       | The current year's last two digits                                                 |
| CURRENT_MONTH            | The month as two digits (example '02')                                             |
| CURRENT_MONTH_NAME       | The full name of the month (example 'July')                                        |
| CURRENT_MONTH_NAME_SHORT | The short name of the month (example 'Jul')                                        |
| CURRENT_DATE             | The day of the month                                                               |
| CURRENT_DAY_NAME         | The name of day (example 'Monday')                                                 |
| CURRENT_DAY_NAME_SHORT   | The short name of the day (example 'Mon')                                          |
| CURRENT_HOUR             | The current hour in 24-hour clock format                                           |
| CURRENT_MINUTE           | The current minute                                                                 |
| CURRENT_SECOND           | The current second                                                                 |
| CURRENT_SECONDS_UNIX     | The number of seconds since the Unix epoch                                         |
| ==== RANDOM VALUES ====  |
| RANDOM                   | 6 random Base-10 digits                                                            |
| RANDOM_HEX               | 6 random Base-16 digits                                                            |
| UUID                     | A Version 4 UUID                                                                   |
| ==== COMMENTS ====       |
| BLOCK_COMMENT_START      | Example output: in PHP `/\*` or in HTML `<!--`                                     |
| BLOCK_COMMENT_END        | Example output: in PHP `\*/` or in HTML `-->`                                      |
| LINE_COMMENT             | Example output: in PHP `//`                                                        |

## TL;DR

### DEV Snippets

TM_SELECTED_TEXT
TM_CURRENT_LINE
TM_CURRENT_WORD
TM_LINE_INDEX
TM_LINE_NUMBER
TM_FILENAME
TM_FILENAME_BASE
TM_DIRECTORY
TM_FILEPATH
RELATIVE_FILEPATH
CLIPBOARD
WORKSPACE_NAME
WORKSPACE_FOLDER
CURRENT_YEAR
CURRENT_YEAR_SHORT
CURRENT_MONTH
CURRENT_MONTH_NAME
CURRENT_MONTH_NAME_SHORT
CURRENT_DATE
CURRENT_DAY_NAME
CURRENT_DAY_NAME_SHORT
CURRENT_HOUR
CURRENT_MINUTE
CURRENT_SECOND
CURRENT_SECONDS_UNIX
RANDOM
RANDOM_HEX
UUID

### Highlighting

|TM_SELECTED_TEXT|TM_CURRENT_LINE|TM_CURRENT_WORD|TM_LINE_INDEX|TM_LINE_NUMBER|TM_FILENAME_BASE|TM_FILENAME|TM_DIRECTORY|TM_FILEPATH|RELATIVE_FILEPATH|CLIPBOARD|WORKSPACE_NAME|WORKSPACE_FOLDER|CURRENT_YEAR_SHORT|CURRENT_YEAR|CURRENT_MONTH_NAME_SHORT|CURRENT_MONTH_NAME|CURRENT_MONTH|CURRENT_DATE|CURRENT_DAY_NAME_SHORT|CURRENT_DAY_NAME|CURRENT_HOUR|CURRENT_MINUTE|CURRENT_SECONDS_UNIX|CURRENT_SECOND|RANDOM|RANDOM_HEX|UUID|BLOCK_COMMENT_START|BLOCK_COMMENT_END|LINE_COMMENT

### dirty version

```jsonc
"match": "\\$(?:(?:[0-9]+|TM_SELECTED_TEXT|TM_CURRENT_LINE|TM_CURRENT_WORD|TM_LINE_INDEX|TM_LINE_NUMBER|TM_FILENAME_BASE|TM_FILENAME|TM_DIRECTORY|TM_FILEPATH|RELATIVE_FILEPATH|CLIPBOARD|WORKSPACE_NAME|WORKSPACE_FOLDER|CURRENT_YEAR_SHORT|CURRENT_YEAR|CURRENT_MONTH_NAME_SHORT|CURRENT_MONTH_NAME|CURRENT_MONTH|CURRENT_DATE|CURRENT_DAY_NAME_SHORT|CURRENT_DAY_NAME|CURRENT_HOUR|CURRENT_MINUTE|CURRENT_SECONDS_UNIX|CURRENT_SECOND|RANDOM|RANDOM_HEX|UUID|BLOCK_COMMENT_START|BLOCK_COMMENT_END|LINE_COMMENT)|{(?:[0-9]+|TM_SELECTED_TEXT|TM_CURRENT_LINE|TM_CURRENT_WORD|TM_LINE_INDEX|TM_LINE_NUMBER|TM_FILENAME_BASE|TM_FILENAME|TM_DIRECTORY|TM_FILEPATH|RELATIVE_FILEPATH|CLIPBOARD|WORKSPACE_NAME|WORKSPACE_FOLDER|CURRENT_YEAR_SHORT|CURRENT_YEAR|CURRENT_MONTH_NAME_SHORT|CURRENT_MONTH_NAME|CURRENT_MONTH|CURRENT_DATE|CURRENT_DAY_NAME_SHORT|CURRENT_DAY_NAME|CURRENT_HOUR|CURRENT_MINUTE|CURRENT_SECONDS_UNIX|CURRENT_SECOND|RANDOM|RANDOM_HEX|UUID|BLOCK_COMMENT_START|BLOCK_COMMENT_END|LINE_COMMENT):.+})",
```

### conditional group version

```jsonc
"match": "[$]({)?(?:[0-9]+|TM_SELECTED_TEXT|TM_CURRENT_LINE|TM_CURRENT_WORD|TM_LINE_INDEX|TM_LINE_NUMBER|TM_FILENAME_BASE|TM_FILENAME|TM_DIRECTORY|TM_FILEPATH|RELATIVE_FILEPATH|CLIPBOARD|WORKSPACE_NAME|WORKSPACE_FOLDER|CURRENT_YEAR_SHORT|CURRENT_YEAR|CURRENT_MONTH_NAME_SHORT|CURRENT_MONTH_NAME|CURRENT_MONTH|CURRENT_DATE|CURRENT_DAY_NAME_SHORT|CURRENT_DAY_NAME|CURRENT_HOUR|CURRENT_MINUTE|CURRENT_SECONDS_UNIX|CURRENT_SECOND|RANDOM|RANDOM_HEX|UUID|BLOCK_COMMENT_START|BLOCK_COMMENT_END|LINE_COMMENT)(?(1)(?:[:/].+)})",
```

### More conditional group version

```jsonc

```

### For AI recognition

$1
$2
$3
$4
$5
$6
$7
$8
$9
$0
$TM_SELECTED_TEXT
$TM_CURRENT_LINE
$TM_CURRENT_WORD
$TM_LINE_INDEX
$TM_LINE_NUMBER
$TM_FILENAME
$TM_FILENAME_BASE
$TM_DIRECTORY
$TM_FILEPATH
$RELATIVE_FILEPATH
$CLIPBOARD
$WORKSPACE_NAME
$WORKSPACE_FOLDER
$CURRENT_YEAR
$CURRENT_YEAR_SHORT
$CURRENT_MONTH
$CURRENT_MONTH_NAME
$CURRENT_MONTH_NAME_SHORT
$CURRENT_DATE
$CURRENT_DAY_NAME
$CURRENT_DAY_NAME_SHORT
$CURRENT_HOUR
$CURRENT_MINUTE
$CURRENT_SECOND
$CURRENT_SECONDS_UNIX
$RANDOM
$RANDOM_HEX
$UUID
========
Variable transforms
========
${1:default|option}
${2:default|something}
${3:default|any option}
${4:default|option}
${5:default|option}
${6:default|option}
${7:default|option}
${8:default|option}
${9:default|option}
${0:default|option}
${TM_SELECTED_TEXT/anything/ig}
${TM_CURRENT_LINE/anything/ig}
${TM_CURRENT_WORD/anything/ig}
${TM_LINE_INDEX/anything/ig}
${TM_LINE_NUMBER/anything/ig}
${TM_FILENAME/anything/ig}
${TM_FILENAME_BASE/anything/ig}
${TM_DIRECTORY/anything/ig}
${TM_FILEPATH/anything/ig}
${RELATIVE_FILEPATH/anything/ig}
${CLIPBOARD/anything/ig}
${WORKSPACE_NAME/anything/ig}
${WORKSPACE_FOLDER/anything/ig}
${CURRENT_YEAR/anything/ig}
${CURRENT_YEAR_SHORT/anything/ig}
${CURRENT_MONTH/anything/ig}
${CURRENT_MONTH_NAME/anything/ig}
${CURRENT_MONTH_NAME_SHORT/anything/ig}
${CURRENT_DATE/anything/ig}
${CURRENT_DAY_NAME/anything/ig}
${CURRENT_DAY_NAME_SHORT/anything/ig}
${CURRENT_HOUR/anything/ig}
${CURRENT_MINUTE/anything/ig}
${CURRENT_SECOND/anything/ig}
${CURRENT_SECONDS_UNIX/anything/ig}
${RANDOM/anything/ig}
${RANDOM_HEX/anything/ig}
${UUID/anything/ig}
