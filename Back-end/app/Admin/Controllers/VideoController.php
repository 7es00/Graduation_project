<?php

namespace App\Admin\Controllers;

use App\Models\Technology;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Video;

class VideoController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Video';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Video());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('instructor', __('Instructor'));
        $grid->column('language', __('Language'));
        $grid->column('image', __('Image'));
        $grid->column('video', __('Video'));
        $grid->column('duration', __('Duration'));
        $grid->column('is_recommended', __('Is recommended'));
        $grid->column('technology_id', __('Technology id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Video::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('instructor', __('Instructor'));
        $show->field('language', __('Language'));
        $show->field('image', __('Image'));
        $show->field('video', __('Video'));
        $show->field('duration', __('Duration'));
        $show->field('is_recommended', __('Is recommended'));
        $show->field('technology_id', __('Technology id'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Video());

        $form->text('name', __('Name'));
        $form->text('instructor', __('Instructor'));
        $form->text('language', __('Language'));
        $form->text('image', __('Image'));
        $form->text('video', __('Video'));
        $form->text('duration', __('Duration'));
        $form->switch('is_recommended', __('Is recommended'))->default(false);
        $form->select('technology_id', __('Technology id'))->options(Technology::all()->pluck('name', 'id'));

        return $form;
    }
}
