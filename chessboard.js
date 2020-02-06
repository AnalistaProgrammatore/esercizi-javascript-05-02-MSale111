/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/

/*Versione breve*/
for (i=1; i<9; i++)
{
    if (i%2===0)
    x='# # # #';
    else
    x=' # # # #';
    console.log (x);
}

/*Alternativa con doppio FOR:

let x='';
for (i=1; i<9; i++)
{
    for (j=1; j<9; j++)
    {
        if (i%2===0)
        {
            if (j%2===0)
                x=x+' ';
            else
                x=x+'#';
        }
        else
        {
            if (j%2===0)
                x=x+'#';
            else
                x=x+' ';        
        }         
    }     
    console.log (x); 
    x='';       
}
*/
