<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use \App\Models\Technology;
use App\Models\Track;

class TechnologyController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Technology';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Technology());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('short_description', __('Short description'));
        $grid->column('description', __('Description'));
        $grid->column('track_id', __('Track id'));
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
        $show = new Show(Technology::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('short_description', __('Short description'));
        $show->field('description', __('Description'));
        $show->field('track_id', __('Track id'));
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
        $form = new Form(new Technology());

        $form->text('name', __('Name'));
        $form->text('short_description', __('Short description'));
        $form->textarea('description', __('Description'));
        $form->select('track_id', __('Track id'))->options(Track::all()->pluck('name', 'id'));


        return $form;
    }
}
