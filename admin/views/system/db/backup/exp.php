<form action="<?php echo base_url($this->config->config['index_url'].'sys_db_backup/expData.html');?>" method="post" id="backForm">
<table class="table_add">
	<tr>
		<td class="width tright"><?php echo $this->lang->line('sys_db_backup_name');?>:</td>
		<td>
			<input type="text" name="name" class="input" style="width: 70%;" value="<?php echo $fname;?>" datatype="*2-30" errormsg="2~30<?php echo $this->lang->line('inc_form_char');?>" sucmsg="<?php echo $this->lang->line('inc_form_pass');?>" nullmsg="<?php echo $this->lang->line('inc_form_null');?>" />
			<span class="Validform_checktip"></span>
		</td>
	</tr>
	<tr>
		<td class="tright"><?php echo $this->lang->line('sys_db_backup_format');?>:</td>
		<td>
			<select name="format">
				<option value="sql">.sql</option>
				<option value="zip">.zip</option>
				<option value="gzip">.gzip</option>
				<option value="txt">.txt</option>
			</select>
		</td>
	</tr>
	<tr>
		<td class="tright"><?php echo $this->lang->line('sys_db_backup_dir');?>:</td>
		<td>
			<select name="dir">
				<option value="<?php echo $backdir;?>"><?php echo $backdir;?></option>
			</select>
		</td>
	</tr>
	<tr>
		<td class="tright"><?php echo $this->lang->line('sys_db_backup_table');?>:</td>
		<td>
			<textarea name="table" style="width: 95%; height: 160px;"><?php echo $table;?></textarea>
		</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td class="sub">
			<input type="submit" id="expSub" value="<?php echo $this->lang->line('inc_export');?>" />
		</td>
	</tr>
</table>
</form>