# Ruby Introduction 8/23/2022

MINASWAN - Matz is nice and so we are nice

### Ruby Overview
- Dynamic - dynamically typed, what is stored in a variable can be any data type
- Interpreted - code is read line by line and passed to an interpreter which passes it to machine code
- Open-source - free and available to anyone
- Scripting - logical operations
- Object-oriented - everything is an object, objects are instances of a class

### Ruby Code

- Ruby version: ruby -v
- irb - interactive ruby console
- exit - gets back out to the normal file path

### Ruby Data Types
- Integer
- Float
- Strings - single quotes
- Boolean
  - equality - no type coercion
  - relational
  - negation
  - logical - AND and OR
- Nil - equal to nothing else
- Symbol - unique identifiers to a key value pair

### Variables
- variables - no assignment operator
- snake_case
- string interpolation - "#{}"

### Methods
- when passing argument use parentheses
- methods with a question mark will return a Boolean value
- .class - see the class name
- anything in uppercase think class
- ruby methods are accessors
- can be made mutators using the bang operator

```ruby
➜  echo-lecture-examples git:(ruby) ✗ irb
3.0.0 :001 > 3 + 3
 => 6
3.0.0 :002 > 4 - 2
 => 2
3.0.0 :003 > 4 * 4
 => 16
3.0.0 :004 > 5 - 3
 => 2
3.0.0 :005 > 4 ** 3
 => 64
3.0.0 :006 > 6 % 3
 => 0
3.0.0 :007 > 6 % 4
 => 2
3.0.0 :008 > 7 / 3
 => 2
3.0.0 :009 > 7.0 / 3
 => 2.3333333333333335
3.0.0 :010 > 'hello'
 => "hello"
3.0.0 :011 > "Hey y'all"
 => "Hey y'all"
3.0.0 :012 > true
 => true
3.0.0 :013 > false
 => false
3.0.0 :014 > 5 == 5
 => true
3.0.0 :015 > 5 == 4
 => false
3.0.0 :016 > 5 == '5'
 => false
3.0.0 :017 > 7 < 9
 => true
3.0.0 :018 > 5 > 4
 => true
3.0.0 :019 > 5 <= 3+2
 => true
3.0.0 :020 > 6 >= 2
 => true
3.0.0 :021 > 4 != 4
 => false
3.0.0 :022 > 4 == 4 && 'hi' == 'hi'
 => true
3.0.0 :023 > 4 == 4 && 'hi' == 'hello'
 => false
3.0.0 :024 > 5 == 3+2 || 'hi' == 'hello'
 => true
3.0.0 :025 > nil
 => nil
3.0.0 :026 > my_name = 'sarah'
 => "sarah"
3.0.0 :027 > my_name
 => "sarah"
3.0.0 :028 > "Hey there, #{my_name}!"
 => "Hey there, sarah!"
3.0.0 :029 > my_name.length
 => 5
3.0.0 :030 > my_name.upcase
 => "SARAH"
3.0.0 :031 > my_name.capitaize
(irb):31:in `<main>': undefined method `capitaize' for "sarah":String (NoMethodError)                                       
Did you mean?  capitalize                            
               capitalize!                           
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                       
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'                                                  
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                                                
3.0.0 :032 > my_name.capitalize
 => "Sarah"
3.0.0 :033 > 'hey there'.capitalize
 => "Hey there"
3.0.0 :034 > my_name.reverse
 => "haras"
3.0.0 :035 > my_name * 3
 => "sarahsarahsarah"
3.0.0 :036 > my_name
 => "sarah"
3.0.0 :037 > my_name.delete'h'
 => "sara"
3.0.0 :038 > my_name.delete('h')
 => "sara"
3.0.0 :039 > my_name.delete('arah')
 => "s"
3.0.0 :040 > my_name.delete('ara')
 => "sh"
3.0.0 :041 > my_name
3.0.0 :041 > my_name.include?('s')
 => true
3.0.0 :042 > my_name.include?('t')
 => false
3.0.0 :043 > my_name.include?('at')
 => false
3.0.0 :044 > my_name.include?('ar')
 => true
3.0.0 :045 > my_name.include?('a' & 'r')
(irb):45:in `<main>': undefined method `&' for "a":String (NoMethodError)                                                          
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                              
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'                                                         
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                                                       
3.0.0 :046 > my_name.include?('a' && 'r')
 => true
3.0.0 :047 > my_name.include?('a' && 't')
 => false
3.0.0 :048 > my_name.include?('a' || 't')
 => true
3.0.0 :049 > my_name.class
 => String
3.0.0 :050 > 5.0.class
 => Float
3.0.0 :051 > 6.class
 => Integer
3.0.0 :052 > true.class
 => TrueClass
3.0.0 :053 > false.class
 => FalseClass
3.0.0 :054 > nil.class
 => NilClass
3.0.0 :055 > '9'.to_i
 => 9
3.0.0 :056 > 9.to_s
 => "9"
3.0.0 :057 > 'hello'.to_i
 => 0
3.0.0 :058 > 9.to_a
(irb):58:in `<main>': undefined method `to_a' for 9:Integer (NoMethodError)                                                 
Did you mean?  to_c                                  
               to_r                                  
               to_f                                  
               to_i                                  
               to_s                                  
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                       
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'                                                  
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                                                
3.0.0 :059 > "4".to_a
(irb):59:in `<main>': undefined method `to_a' for "4":String (NoMethodError)                                            
Did you mean?  to_c                              
               to_r                              
               to_f                              
               to_i                              
               to_s                              
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'                   
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'                                              
        from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'                                            
3.0.0 :060 > my_name
 => "sarah"
3.0.0 :061 > my_name = my_name.capitalize
 => "Sarah"
3.0.0 :062 > my_name
 => "Sarah"
3.0.0 :063 > my_name.reverse
 => "haraS"
3.0.0 :064 > my_name
 => "Sarah"
3.0.0 :065 > my_name.reverse!
 => "haraS"
3.0.0 :066 > my_name
 => "haraS"
3.0.0 :067 > my_array = [2, 3, 4, 5]
 => [2, 3, 4, 5]
3.0.0 :068 > my_array
 => [2, 3, 4, 5]
3.0.0 :069 > my_array.length
 => 4
3.0.0 :070 > my_array[0]
 => 2
3.0.0 :071 > my_array.first
 => 2
3.0.0 :072 > my_array.last
 => 5
3.0.0 :073 > my_array.reverse
 => [5, 4, 3, 2]
3.0.0 :074 > my_array
 => [2, 3, 4, 5]
3.0.0 :075 > my_array[2]
 => 4
3.0.0 :076 > my_array[2] = 8
 => 8
3.0.0 :077 > my_array
 => [2, 3, 8, 5]
3.0.0 :078 > my_array << 9
 => [2, 3, 8, 5, 9]
3.0.0 :079 >
```
