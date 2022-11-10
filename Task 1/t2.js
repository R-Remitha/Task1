function get()
{
    tim=setTimeout(get1,3);
}
function get1()
{
    var x = document.getElementById('rp').value;
    var res = x.split(/[.।]/);
    console.log(res);
    document.getElementById('rp').value="";
    if(x.indexOf('.')!=-1)
    {
        for(i=1;i<res.length-1;i++)
        {
            if(i==res.length-2)
            {
                var m=i+')'+res[i]+'.';
            }
            else
            {
                var m=i+')'+res[i]+'.\n';
            }
            document.getElementById('rp').value+=m;
        }
    }
    else
    {
        for(i=1;i<res.length-1;i++)
        {
            if(i==res.length-2)
            {
                var m=i+')'+res[i]+'।';
            }
            else
            {
                var m=i+')'+res[i]+'।\n';
            }
            document.getElementById('rp').value+=m;
        }
    }
}
function cur()
{
    var cp=document.getElementById('rp').selectionStart;
    var y = document.getElementById('rp').value;
    if(y=='')
    {
        document.getElementById('lp').value='\n\n\n\n\n\n\n\nNo pasted text present.';
    }
    else
    {
        var m=y.split(/\n/);
        var x = document.getElementById('rp').value;
        var n='';
        for(var i=0;i<cp;i++)
        {
            n=n+x[i];
        }
        var res=n.split(/\n/);
        var t=res.length;
        document.getElementById('lp').value='\n\n\n\n\n\n\n\nYou are on line no: '+t;
        
    }
    
    /*var hi=m[t-1];
    for(var t=0;t<=m.length;t++)
    {
        if(m[t]==hi)
        {
            var y=m[t].replace(m[t], '<mark>$&</mark>');
            document.getElementById('rp').value+=y;
        }
        else
        {
            document.getElementById('rp').value+=m[t];
        }
    }*/
}

